---
created: 2025-09-18 10:27:10
shamsi: 1404-06-27 10:27:10
calendar: "[[2025-09-18]]"
tags:
aliases:
title: Install Google Cloud Ops Agent to Log Docker
publish: true
---
To install it

```bash
curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh
sudo bash add-google-cloud-ops-agent-repo.sh --also-install
```

check if it's running:
```bash
sudo systemctl status google-cloud-ops-agent*""
```

Next we should configure docker logs to go through Google Cloud Agent. 

```bash
# What logging driver is Docker using?
docker info --format '{{.LoggingDriver}}'

# Where is Docker’s root dir on THIS host?
docker info --format '{{.DockerRootDir}}'
```

It should be `json-file` for our purpose. 

You should then check this folder to see if logs are available:
```bash
sudo find "$(docker info --format '{{.DockerRootDir}}')" -type f -name '*-json.log' 2>/dev/null
```

Then Give some permissions:
```bash
# let others traverse the dir tree
sudo chmod o+X "$(docker info --format '{{.DockerRootDir}}')"
sudo chmod o+X "$(docker info --format '{{.DockerRootDir}}')/containers"
```

Create a file at `/etc/google-cloud-ops-agent/config.yaml`:
```
logging:
  receivers:
    docker_all:
      type: files
      include_paths:
        - /var/lib/docker/containers/*/*-json.log
      record_log_file_path: true   # adds file path as a label in Cloud Logging

  processors:
    docker_json:
      type: parse_json
      # optional: map Docker's "time" field to LogEntry.timestamp
      # time_key: time
      # time_format: "%Y-%m-%dT%H:%M:%S.%L%z"

  service:
    pipelines:
      docker_pipeline:
        receivers: [docker_all]
        processors: [docker_json]
```

Note that you should change included path to be the path of your installed docker logs folder. 

Then restart google cloud ops agent:
```bash
sudo systemctl restart google-cloud-ops-agent
sudo systemctl status google-cloud-ops-agent
```

You should be done. Now go to GCP and VM Instances -> Observability tab and you should see your logs. 

[Google Console Cloud - GCP](Google%20Console%20Cloud%20-%20GCP.md)
