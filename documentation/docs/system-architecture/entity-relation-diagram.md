---
title: Entity Relation Diagram
sidebar_position: 4
---

![View the Entity Relation Diagram](/img/EntityRelationDiagram.jpeg)

**Figure 1.14 (shown above)**

The database is comprised of 9 entities: User, Agent, Story, Chapter, Vote, Context, Goal, Critique, and Edit. The primary entity is User. Agent and Story are associated with User through the primary key (PK) user_id. Vote is linked to both User (user_id) and Agent (agent_id). Context is connected to Agent via agent_id. Chapter is related to Story through story_id. Goal, Critique, and Edit are linked to Chapter through chapter_id. Additionally, Edit is also associated with User through user_id. A user can create many stories, agents, and edits, but can only vote once at a time. Each Agent also has only one vote at a time and one context, but can work on several chapters. Each story is composed of several chapters. Furthermore, each chapter can have many goals, critiques, and edits.

<!--![Table Description](/img/table-des.jpeg)-->