# DevTables

**The best Mac database tool for keyboard-driven developers who work with
PostgreSQL, MySQL, and SQLite.**

A native macOS database app that feels like your code editor — fast,
keyboard-first, and out of the way — not a mouse-driven DBA console.

---

## Why DevTables

Most database GUIs are built for the mouse: endless trees, menus, and dialogs.
DevTables is built for developers who live in the keyboard. If you reach for a
command palette before the trackpad and expect your tools to keep up with how
fast you think, DevTables is for you.

We're not trying to be everything to everyone. We aim to be the **best** tool for
one specific developer — someone who works with PostgreSQL, MySQL, and SQLite
every day — rather than the broadest tool that covers every database and every
DBA task.

## What makes it different

- **⇧⌘P Command palette** — run any action by name, no menu hunting.
- **⌘P Table quick-switcher** — jump to any table by typing, just like opening a
  file in your editor.
- **Schema-aware SQL autocomplete** — live table, view, and column suggestions
  driven by the tables in your current query.
- **Rebindable shortcuts** for every common action.
- **Instant, state-preserving table switching** — each open table keeps its
  scroll position, page, sort, and selected row. Flip between tables and land
  exactly where you left off — no jumping back to page one.
- **Remembered column choices** — the columns you show or hide are saved per
  table and per connection.
- **Practical remote access** — TLS settings and SSH tunnels for PostgreSQL and
  MySQL, including password and common private-key workflows.

The result feels closer to working in a code editor than administering a
database.

## Features

- **Connections** — saved connections with a fast start page; passwords stored in
  the macOS Keychain; multi-window workspaces; optional session restore;
  tap-to-reconnect when a connection drops; visible connection progress,
  cancellation, and a configurable connect timeout.
- **Browsing** — object browser for tables, views, indexes, and triggers with
  search; pagination-first browsing with per-table filters; native sorting,
  column resizing, and multi-row selection.
- **SQL editor** — live syntax highlighting, schema-aware autocomplete,
  beautify/uglify formatting, run-all or run-current, per-connection query
  history, and saved/favorite queries with folders.
- **Editing** — focused, transactional row editing (insert, update, delete,
  duplicate) with a Review Changes step that shows the exact SQL before it runs.
- **Structure** — inline schema editing: add/rename/drop columns, edit
  type/nullability/default/comment, manage indexes and foreign keys, create and
  drop tables and databases.
- **Users** — database user management for PostgreSQL and MySQL with a compact
  permissions matrix.
- **Import / export** — CSV import with mapping and preview; CSV/JSON export for
  tables and query results; run a `.sql` file in the editor.

## Supported databases

| Database     | Status                                            |
| ------------ | ------------------------------------------------- |
| PostgreSQL   | ✅ Browse, edit data, edit structure, manage users, TLS/SSH |
| MySQL        | ✅ Browse, edit data, edit structure, manage users, TLS/SSH |
| SQLite       | ✅ Browse and edit (WAL-aware)                      |
| OpenObserve  | ✅ Read-only stream browsing & queries              |

**On the radar (later, not today):** SQL Server (MSSQL), MongoDB, and Redis are
possible future additions. The current priority is making the three core engines
the best experience on macOS.

## Requirements

- macOS 15 or later

## Feedback & issues

This repository is where DevTables users share feedback and report problems.

- 🐛 **Found a bug?** [Open an issue](https://github.com/hengfeiyang/devtables/issues/new).
- 💡 **Have an idea or feature request?** [Start a discussion or open an issue](https://github.com/hengfeiyang/devtables/issues).

When reporting a bug, it helps to include your macOS version, the DevTables
version, the database type, and the steps to reproduce.

---

<div align="center">

DevTables — a native macOS database tool for developers.

</div>
