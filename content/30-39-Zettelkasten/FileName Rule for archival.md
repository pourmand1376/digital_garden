---
created: 2026-05-15 12:44:02
shamsi: 1405-02-25 12:44:02
calendar: "[[2026-05-15]]"
tags:
aliases:
title: FileName Rule for archival
publish: true
---

This is my thought process back and forth with ChatGPT and Gemini. 

| **Approach**       | **Typical Structure**        | **Best For**                        | **Example**                    |
| ------------------ | ---------------------------- | ----------------------------------- | ------------------------------ |
| **Chronological**  | `YYYYMMDD_Description`       | Daily logs, photos, scientific data | `20260515_SoilSample_A1.csv`   |
| **Project-Based**  | `ProjectID_Component_Status` | Construction, Design, Large Teams   | `PRJ402_Kitchen_Draft_v03.dwg` |
| **Web / SEO**      | `lowercase-kebab-case`       | Website assets, Blog images         | `how-to-fix-leaking-pipe.jpg`  |
| **Academic/Legal** | `Author_Year_Keyword_v01`    | Research papers, Case files         | `Smith_2026_CaseStudy_v02.pdf` |
| **Machine-Ready**  | `Prefix_UUID`                | Automated backups, Databases        | `BKP_550e8400-e29b-41d4.zip`   |

Use:

```
YYYY-MM-DD--who--what.ext
```

Examples:

```
2026-05-15--barclays--current-account-statement.pdf
2026-05-15--octopus--electricity-bill.pdf
2026-05-15--apple--macbook-repair-invoice.pdf
2026-05-15--dvla--vehicle-tax-confirmation.pdf
```

For no obvious sender/source:

```
2026-05-15--personal--passport-scan.pdf
2026-05-15--home--boiler-manual.pdf
2026-05-15--unknown--old-receipt.pdf
```

This is much easier than IDs, still sorts nicely, and searches well.

This was Gemini and ChatGPT Chats. 

I'm thinking that for me a combination of these would be ok. Like have a chronological filenaming. 

- Then If I have a project, I assign IDs to projects. `PRJ003` format. Put it in description 
- For versioning I should use `v00` format. Always two numbers. 

> My Rule: Never Change ID of a file. Once I put it in this format, I never change file ID again. Never change the fixed ID. You may change the descriptive part.

I think If I include a three digit number after date. The name would be unique. And also I can change the filename! 

Gemini:
If you decide to use your **3-digit number** idea, I recommend using **dashes for the date** and an **underscore for the serial/description**. This creates a clear visual hierarchy:
> `2026-05-15-001_Project-Notes.docx`
- **Dashes (`-`)** connect the sub-parts of the date.
- **The Underscore (`_`)** acts as a "hard wall" between the ID and the description.


[Jonny Decimal System for File Organization](Jonny%20Decimal%20System%20for%20File%20Organization.md)

For folders also, I'm thinking of using `YYYY/YYYY-MM` folders. 

## Why the "Two-Part" Name is Superior
### 1. The "Fixed Part" ensures Perfect Sorting
The first half of your filename (`20260515-001`) is a **Primary Key**.
- It ensures that files created on the same day are listed in the exact order you made them.
- It provides a "Short Name" for the file. In a meeting, you can say, "Check file 0515-001," and everyone can find it instantly.
### 2. The "Variable Part" ensures Multi-Search
By including `ProjectID` and `PersonName` as tags, you can find files through different "lenses":
- **The Project Lens:** Search `PRJ0213` to see everything for that client.
- **The Person Lens:** Search `SMITH` to see every document involving that person.
- **The Topic Lens:** Search `TAX` to pull financial records from every year/month folder.

---

This system works without any folders. It can be combined with PARA. 

```
0-Inbox/  
1-Projects/  
2-Areas/  
3-Resources/
4-Archives/
  2026/
    2026-01/
    2026-02/
    2026-03/
    2026-04/
    2026-05/
```


[PARA Method Alternatives](PARA%20Method%20Alternatives.md)
[PARA Method and Zettelkasten](PARA%20Method%20and%20Zettelkasten.md)
[Jonny Decimal System for File Organization](Jonny%20Decimal%20System%20for%20File%20Organization.md)
[File Organization - 5 Systems You Must Know](File%20Organization%20-%205%20Systems%20You%20Must%20Know.md)

> A file name is like a person’s nickname.  
A file path is like their home address.  
A file ID is like their passport number or national ID.

[[Thoughts on filenaming and folder organization]]
