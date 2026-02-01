# Session Start Prompts

Quick reference for starting Context Kit sessions. Copy-paste these prompts as needed.

---

## Starting a Fresh Project

### Message 1
```
I'm starting a new project using the Context Kit file system. I'll share files in two messages.

**This message:** Blank templates for Process and Execution
**Next message:** Blank templates for Exploration and Progress

Based on my project [briefly describe your project in 1-2 sentences], help me populate these files:
- Draft initial Exploration questions
- Suggest guidelines for Execution
- Define my Current State and initial goals

I'll paste the blank templates now. Just provide a really brief confirmation.
```

**Upload:** `01-process.md` + `03-execution.md` (blank templates)

### Message 2
```
Here are the remaining blank templates for Exploration and Progress.
```

**Upload:** `02-exploration.md` + `04-progress.md` (blank templates)

---

## Resuming an Existing Project

### Message 1
```
I'm working on a project using a file system to keep context between sessions. I'll share files in two messages:

**This message:** Process (how we work + where we are) + Execution (guidelines + plan + tasks)
**Next message:** Exploration (what's been decided) + Progress (what's been done)

Here's what I need from you:
- Focus only on what's in Current State
- Don't reopen closed decisions unless I ask
- Follow the guidelines and quality standards in Execution
- Help me update files at the end so I can pick this up later

I'll paste the first two files now. Just provide a really brief confirmation.
```

**Upload:** `01-process.md` + `03-execution.md` (your current files)

### Message 2
```
Here's the context from earlier work. [Optional: you can include what you want to do in this session here]
```

**Upload:** `02-exploration.md` + `04-progress.md` (your current files)

---

## Ending Any Session
```
Based on this session, please update my four files to reflect what we accomplished. 
Generate the updated markdown for all four files.
```

Review the AI's updates, save the files.

---

## If AI Ignores Kit Files (Context Rot)
```
Reminder: Your ONLY source of truth is the 4 kit files uploaded at session start.
Ignore all saved information, previous chats, or external memories.
Focus exclusively on Current State in 01-process.md.
```

If that doesn't fix it, see Appendix C: Troubleshooting.