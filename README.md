# Weird bun crash

Versions of programs:

```sh
bun --version
# 1.1.20

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
# bun install v1.1.20 (ae194892)

# + lua-types@2.13.1
# + typescript@5.5.2
# + typescript-to-lua@1.26.0

# 15 packages installed [153.00ms]

watchexec -- just
# [22:01:04] Starting compilation in watch mode...

# ============================================================
# Bun v1.1.20 (ae194892) Windows x64
# CPU: sse42 avx avx2
# Args: "C:\Users\James\scoop\apps\bun\current\bun.exe" "node_modules/typescript-to-lua/dist/tstl.js" "--watch"
# Features: jsc Bun.stdout transpiler_cache tsconfig(2)
# Builtins: "bun:main" "node:assert" "node:buffer" "node:constants" "node:crypto" "node:fs" "node:os" "node:path" "node:perf_hooks" "node:stream" "node:string_decoder" "node:util" "node:util/types"
# Elapsed: 277ms | User: 312ms | Sys: 15ms
# RSS: 0.20GB | Peak: 0.20GB | Commit: 0.23GB | Faults: 51869

# panic(main thread): index out of bounds: index 256, len 256
# oh no: Bun has crashed. This indicates a bug in Bun, not your code.

# To send a redacted crash report to Bun's team,
# please file a GitHub issue using the link below:

#  https://bun.report/1.1.20/wa1ae19489AygggwCu4z9Gyt7jL4q4Mw290Qqs1lLk29mJougnJg1497C__A0eNrLzEtJrVDILy1RyE9TSMovzUsptlLIBAsamZrpKOSk5oEYABPDDKg

# error: Recipe `watch` failed on line 4 with exit code 3
# [Command exited with 1]
```
