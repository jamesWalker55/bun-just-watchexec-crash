# Weird bun crash

Versions of programs:

```sh
bun --version
# 1.1.18

just --version
# just 1.29.1

watchexec --version
# watchexec 2.1.1 (72f069a 2024-04-30) +pid1
# commit-hash: 72f069a8477c679e45f845219276b0bfe22fed79
# commit-date: 2024-04-30
# build-date: 2024-04-30
# release: 2.1.1
# features: default,pid1
```

How to crash bun:

```sh
bun install
# bun install v1.1.18 (5a0b9352)

# + typescript@5.5.3
# + @types/bun@1.1.6
# + typescript-to-lua@1.26.1

# 19 packages installed [136.00ms]

watchexec -- just
# [21:50:22] Starting compilation in watch mode...

# error TS18003: No inputs were found in config file '//?/D:/Programming/temppppppp/tsconfig.json'. Specified 'include' paths were '["**/*"]' and 'exclude' paths were '[]'.

# error TSTL: JSX is only supported with "react" jsx option.

# [21:50:22] Found 2 errors. Watching for file changes.

# ============================================================
# Bun v1.1.18 (5a0b9352) Windows x64
# Args: "C:\Users\James\scoop\apps\bun\current\bun.exe" "node_modules/typescript-to-lua/dist/tstl.js" "--watch"
# Features: jsc Bun.stdout transpiler_cache tsconfig(2)
# Builtins: "bun:main" "node:assert" "node:buffer" "node:constants" "node:crypto" "node:fs" "node:os" "node:path" "node:perf_hooks" "node:stream" "node:string_decoder" "node:util" "node:util/types"
# Elapsed: 813ms | User: 281ms | Sys: 62ms
# RSS: 0.20GB | Peak: 0.20GB | Commit: 0.23GB | Faults: 52013

# panic(main thread): @memcpy arguments alias
# oh no: Bun has crashed. This indicates a bug in Bun, not your code.

# To send a redacted crash report to Bun's team,
# please file a GitHub issue using the link below:

#  https://bun.report/1.1.18/wa15a0b935AyggggFyz79R6jt0Mk6lx+C06/14B__A0eNpzyE3NTS6oVEgsSi/NTc0rKVZIzMlMLAYAae8I7A

# error: Recipe `my_task` failed on line 2 with exit code 3
# [Command exited with 1]
```
