---
created: 2025-11-18T00:48:38+03:30
reviewed:
url: https://www.youtube.com/watch?v=28ZAoStv-Xw?start=1211
title: When Feature flags go bad - Edith Harbaugh
channel: NDC Conferences
related:
  - "[[Videos]]"
published: 2017-07-05
thumbnailUrl: https://i.ytimg.com/vi/28ZAoStv-Xw/maxresdefault.jpg
duration: "2383"
watched:
publish: true
aliases:
---


![When Feature flags go bad - Edith Harbaugh](https://www.youtube.com/watch?v=28ZAoStv-Xw?start=1211)

## Description

How feature flags can be used incorrectly for disastrous results, and how NOT to have this happen to you.

Feature flags are a valuable DevOps technique to deliver better, more reliable software faster. Feature flags can be used for both release management (dark launches, canary rollouts, betas) as well as long term control (entitlement management, user segmentation personalization). However, if not managed properly, feature flags can be very destructive technical debt. Feature flags need to be managed properly with visibility and control to both engineering and business users.

### Release Cycles
Release Cycles are reduced from 18-month to weekly! Microsoft previously used 1 year to build and 1 year to test! 

> Feature flags have become a critical part of how we roll out features, get feedback and allow engineering and marketing to proceed on their own schedules. It's hard to imagine DevOps services without them. Microsoft Engineering Leadership

Feature Flags: Unified Codebase and Choose who gets what. 

### Good Side of Feature Flags
When you want to release a feature, sometimes you want to have an easy kill switch. 

If you don't have kill switch, it would be 3:00AM in the morning and something just doesn't work and you don't know what to do?

We would then enter into danger mode:
- What happened?
- Who could fix it?
- What's the last known build?
- What are we going to do?

Controlled Rollout?
Allows to push gradually. 

Early access for your best customers!
People really like that. 

Blocking early access is also a good idea for some customers. Not all people want to test stuff and they neither care or want new features. 

Block IP Addresses? Block any subset of customers from getting early releases. 

### Dark Side of Feature Flags
Feature flag makes a unified Codebase and prevents long-lived branches. 

She tells a story about how feature flags can get us in trouble. and she is proposing some mechanisms to use them better:
- Never Name them ambiguously
- Don't overuse feature flags. 
> Don't turn off the light switch. It also operates the elevator. 
- Conflicting Flags
- Put flags in a common place. Config files are a bad place to control them especially if you have multiple teams (like front-end and backend). 
- If you have admin UI page, it might be too easy to toggle feature flags on or off and it is not always good. Don't get yourself in a situation in which everybody can control your app easily. 
- Leftover flags: A lot of feature flags would be accumulated overtime. Each feature flag should have a time to delete! 

### Recipe for Effective Feature Flag Driven Development
- **Flag Carefully**: Once every sprint? Think about it. Is it really important?
- **Lock Down Access**: Think about who and why gets access. You can use DB but don't use config files. The best way is to have a kind of system and also **Audit Log**. Not to have somebody to blame. But have somebody to talk to. 
- **Remove flags** periodically: clean up to protect the team. 

She loves bad feature flag stories and tells a lot of them. 

You should never have a system which people can mess about. We should document feature flags consistently. 

The good thing is to have something half-baked and show it to some people! 

**The biggest problem with every feature is that nobody would use them (not performance issues).**

The other good thing is that you don't have to spin-up another server for testing. 

[software](Index%20Softwares.md)
[Feature Flag](Feature%20Flag.md)
