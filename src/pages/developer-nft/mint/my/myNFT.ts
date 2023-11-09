const myNFT =
  "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzY4LjUgMzY4LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2OC41IDM2OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgICAgLnN0MHtmaWxsOiMwNTAzMDg7fQogICAgICAgIC5zdDJ7c3Ryb2tlOiMwNTAzMDg7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQogICAgICAgIC5zdDR7ZmlsbDpub25lO3N0cm9rZTojMDUwMzA4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9CiAgICAgICAgLnN0NntmaWxsOm5vbmU7c3Ryb2tlOiM5M0ZCRUQ7c3Ryb2tlLXdpZHRoOjAuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KICAgICAgICAuc3Q3e2ZpbGw6IzkzRkJFRDt9CiAgICAgICAgLnN0OHtmaWxsOiMwNTAzMDg7c3Ryb2tlOiM5M0ZCRUQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQogICAgICAgIC5zdDQ1e3N0cm9rZTojMDUwMzA4O3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KICAgICAgICAucm93e21hcmdpbjowO30KICAgICAgICAucm93IHNwYW57ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjE0cHg7bGluZS1oZWlnaHQ6MTRweDtiYWNrZ3JvdW5kOiMwNTAzMDg7cGFkZGluZzowIDNweDtib3JkZXI6MXB4IHNvbGlkICM2MkU2RDQ7fQogICAgICAgIC5yb3cgc3BhbjpudGgtY2hpbGQoZXZlbil7CiAgICAgICAgICBib3JkZXItbGVmdDpub25lOwogICAgICAgIH0KICAgICAgICAucm93Om50aC1jaGlsZChuKzIpIHNwYW57CiAgICAgICAgICBtYXJnaW4tdG9wOiAtMC45cHgKICAgICAgICB9CiAgICAgICAgLnJvdzpudGgtY2hpbGQobisyKSBzcGFuOm50aC1jaGlsZCgxKXsKICAgICAgICAgIHdpZHRoOiA1NS44cHgKICAgICAgICB9CiAgICAgICAgLnN0NjF7CiAgICAgICAgICBmaWxsOm5vbmU7CiAgICAgICAgICBzdHJva2U6IzkwRjlFQTsKICAgICAgICAgIHN0cm9rZS13aWR0aDo0OwogICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6cm91bmQ7CiAgICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDoxMDsKICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDA7CiAgICAgICAgICBhbmltYXRpb246IGRyYXcgM3MgbGluZWFyIDRtcyBpbmZpbml0ZTsKICAgICAgICB9CiAgICAgICAgQGtleWZyYW1lcyBkcmF3ewogICAgICAgICAgZnJvbXsKICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDAKICAgICAgICAgIH0KICAgICAgICAgIHRvewogICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMAogICAgICAgICAgfQogICAgICAgIH0gICAgICAKICAgICAgPC9zdHlsZT4KICAgICAgPGc+CiAgICAgICAgPGc+CiAgICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggY2xhc3M9InN0NDUiIGZpbGw9InVybCgjZ3JhZGllbnQxKSIgZD0iTTUyLjM1LDMuMjFjLTkuNjcsMC0xNy42Miw3LjMxLTE4LjY1LDE2LjdjLTEuOTcsMTUuMTYsOC4xOCwyMi4wNiw4LjE4LDIyLjA2aDI5LjI0VjIxLjk4ICAgICBDNzEuMTIsMTEuNjIsNjIuNzIsMy4yMSw1Mi4zNSwzLjIxeiIvPgogICAgICAgICAgICA8cGF0aCBjbGFzcz0ic3QyIiBmaWxsPSJ1cmwoI2dyYWRpZW50MikiIGQ9Ik0yNzguODUsMy4yMUg3MS4xMkg1Mi4zNWMxMC4zNywwLDE4Ljc3LDguNCwxOC43NywxOC43N3YzMjIuNjRjMCwxMS40Miw5LjI1LDIwLjY3LDIwLjY3LDIwLjY3aDIwNS44MyAgICAgVjIxLjk4QzI5Ny42MiwxMS42MiwyODkuMjIsMy4yMSwyNzguODUsMy4yMXoiLz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDxwYXRoIGNsYXNzPSJzdDQ1IiBmaWxsPSJ1cmwoI2dyYWRpZW50MykiIGQ9Ik0zMzQuMzEsMzI0LjUySDEwOS4zNGM0LjIzLDQuMzYsNi44NCwxMC4zLDYuODQsMTYuODVjMCwxMi4wNy04LjgzLDIyLjA3LTIwLjM4LDIzLjkxaDIyNC45NyAgICBjMTEuNTUtMS44NCwyMC4zOC0xMS44NCwyMC4zOC0yMy45MUMzNDEuMTUsMzM0LjgyLDMzOC41NCwzMjguODgsMzM0LjMxLDMyNC41MnoiLz4KICAgICAgICAgIDxyZWN0IHg9Ijc5LjY5IiB5PSIxNS40NSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgLTEuMjI0NjQ3ZS0xNiAxLjIyNDY0N2UtMTYgLTEgMzM1Ljk0MjcgNzcuNzY2OCkiIGNsYXNzPSJzdDQiIHdpZHRoPSIxNzYuNTUiIGhlaWdodD0iNDYuODYiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGc+CiAgICAgICAgICA8Zz4KICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI3OS4zNiw3My43MSA3OS4zNiwyNTIuMTUgOTguNzIsMjcxLjMzIDI4OC4yOCwyNzEuMzMgMjg4LjI4LDEwNi41MiAyNTUuNDgsNzMuNzEiLz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDxtYXNrIGlkPSJwb2x5Z29uIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03OS4zNiA3My43MUw3OS4zNiAyNTIuMTUgTDk4LjcyIDI3MS4zMyBMMjg4LjI4IDI3MS4zMyBMMjg4LjI4IDEwNi41MiBMMjU1LjQ4IDczLjcxWiIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgIDxnIG1hc2s9InVybCgjcG9seWdvbikiPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMTgzLjgyLDg1Ljc3IDE3OS4xNSw5OC41OCAxODguNDksOTguNTgiLz4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMTgzLjgyLDI1OS4yNyAxODguNDksMjQ2LjQ2IDE3OS4xNSwyNDYuNDYiLz4KICAgICAgICAgICAgICAgIDxsaW5lIHgxPSIxODMuODIiIHkxPSI5NS43MSIgeDI9IjE4My44MiIgeTI9IjI1MC41MyIgc3Ryb2tlPSIjOTNGQkVEIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9IjI3MC41NywxNzIuNTIgMjU3Ljc2LDE2Ny44NSAyNTcuNzYsMTc3LjE5Ii8+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9Ijk3LjA3LDE3Mi41MiAxMDkuODgsMTc3LjE5IDEwOS44OCwxNjcuODUiLz4KICAgICAgICAgICAgICAgIDxsaW5lIHgxPSIxMDcuMDEiIHkxPSIxNzIuNTIiIHgyPSIyNjAuNjMiIHkyPSIxNzIuNTIiIHN0cm9rZT0iIzkzRkJFRCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSI3OS4zNiIgeTE9Ijg1Ljc3IiB4Mj0iMjg4LjI4IiB5Mj0iODUuNzciLz4KICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSI3OS4zNiIgeTE9IjEwMy4xMiIgeDI9IjI4OC4yOCIgeTI9IjEwMy4xMiIvPgogICAgICAgICAgICAgICAgPGxpbmUgY2xhc3M9InN0NiIgeDE9Ijc5LjM2IiB5MT0iMTIwLjQ3IiB4Mj0iMjg4LjI4IiB5Mj0iMTIwLjQ3Ii8+CiAgICAgICAgICAgICAgICA8bGluZSBjbGFzcz0ic3Q2IiB4MT0iNzkuMzYiIHkxPSIxMzcuODIiIHgyPSIyODguMjgiIHkyPSIxMzcuODIiLz4KICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSI3OS4zNiIgeTE9IjE1NS4xNyIgeDI9IjI4OC4yOCIgeTI9IjE1NS4xNyIvPgogICAgICAgICAgICAgICAgPGxpbmUgY2xhc3M9InN0NiIgeDE9Ijc5LjM2IiB5MT0iMTcyLjUyIiB4Mj0iMjg4LjI4IiB5Mj0iMTcyLjUyIi8+CiAgICAgICAgICAgICAgICA8bGluZSBjbGFzcz0ic3Q2IiB4MT0iNzkuMzYiIHkxPSIxODkuODciIHgyPSIyODguMjgiIHkyPSIxODkuODciLz4KICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSI3OS4zNiIgeTE9IjIwNy4yMiIgeDI9IjI4OC4yOCIgeTI9IjIwNy4yMiIvPgogICAgICAgICAgICAgICAgPGxpbmUgY2xhc3M9InN0NiIgeDE9Ijc5LjM2IiB5MT0iMjI0LjU3IiB4Mj0iMjg4LjI4IiB5Mj0iMjI0LjU3Ii8+CiAgICAgICAgICAgICAgICA8bGluZSBjbGFzcz0ic3Q2IiB4MT0iNzkuMzYiIHkxPSIyNDEuOTIiIHgyPSIyODguMjgiIHkyPSIyNDEuOTIiLz4KICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSI3OS4zNiIgeTE9IjI1OS4yNyIgeDI9IjI4OC4yOCIgeTI9IjI1OS4yNyIvPgoKICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSIyNzAuNTciIHkxPSI3My43MSIgeDI9IjI3MC41NyIgeTI9IjI4OC4yOCIvPgogICAgICAgICAgICAgICAgPGxpbmUgY2xhc3M9InN0NiIgeDE9IjI1My4yMiIgeTE9IjczLjcxIiB4Mj0iMjUzLjIyIiB5Mj0iMjg4LjI4Ii8+CiAgICAgICAgICAgICAgICA8bGluZSBjbGFzcz0ic3Q2IiB4MT0iMjM1Ljg3IiB5MT0iNzMuNzEiIHgyPSIyMzUuODciIHkyPSIyODguMjgiLz4KICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSIyMTguNTIiIHkxPSI3My43MSIgeDI9IjIxOC41MiIgeTI9IjI4OC4yOCIvPgogICAgICAgICAgICAgICAgPGxpbmUgY2xhc3M9InN0NiIgeDE9IjIwMS4xNyIgeTE9IjczLjcxIiB4Mj0iMjAxLjE3IiB5Mj0iMjg4LjI4Ii8+CiAgICAgICAgICAgICAgICA8bGluZSBjbGFzcz0ic3Q2IHkiIHgxPSIxODMuODIiIHkxPSI3My43MSIgeDI9IjE4My44MiIgeTI9IjI4OC4yOCIvPgogICAgICAgICAgICAgICAgPGxpbmUgY2xhc3M9InN0NiIgeDE9IjE2Ni40NyIgeTE9IjczLjcxIiB4Mj0iMTY2LjQ3IiB5Mj0iMjg4LjI4Ii8+CiAgICAgICAgICAgICAgICA8bGluZSBjbGFzcz0ic3Q2IiB4MT0iMTQ5LjEyIiB5MT0iNzMuNzEiIHgyPSIxNDkuMTIiIHkyPSIyODguMjgiLz4KICAgICAgICAgICAgICAgIDxsaW5lIGNsYXNzPSJzdDYiIHgxPSIxMzEuNzciIHkxPSI3My43MSIgeDI9IjEzMS43NyIgeTI9IjI4OC4yOCIvPgogICAgICAgICAgICAgICAgPGxpbmUgY2xhc3M9InN0NiIgeDE9IjExNC40MiIgeTE9IjczLjcxIiB4Mj0iMTE0LjQyIiB5Mj0iMjg4LjI4Ii8+CiAgICAgICAgICAgICAgICA8bGluZSBjbGFzcz0ic3Q2IiB4MT0iOTcuMDciIHkxPSI3My43MSIgeDI9Ijk3LjA3IiB5Mj0iMjg4LjI4Ii8+CiAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICAgIAogICAgICAgIDxmb3JlaWduT2JqZWN0IHdpZHRoPSIxNzYuNTUiIGhlaWdodD0iNDYuODYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5LjY5LCAxNS40NSkiID4KICAgICAgICAgIDxib2R5IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0ibWFyZ2luOjA7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjAgNHB4OyI+CiAgICAgICAgICAgIDxwIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWwnO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjEuMiI+Zih4KSA9IC0yLjU5Nzl4PHN1cD40PC9zdXA+ICsgMC4yNTcweDxzdXA+Mzwvc3VwPiArIDIuMTQzMHg8c3VwPjI8L3N1cD4gKyAwLjI4ODF4PC9wPgogICAgICAgICAgPC9ib2R5PgogICAgICAgIDwvZm9yZWlnbk9iamVjdD4gCiAgICAgICAgPGZvcmVpZ25PYmplY3Qgd2lkdGg9IjE4OS41NiIgaGVpZ2h0PSI0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTguNzIsIDI3MS4zMykiID4gIAogICAgICAgICAgPGJvZHkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJtYXJnaW46MDtoZWlnaHQ6MTAwJTtmb250LXNpemU6N3B4O2ZvbnQtZmFtaWx5OidBcmlhbCc7Y29sb3I6d2hpdGUiPgogICAgICAgICAgICA8cCBjbGFzcz0icm93Ij48c3Bhbj5JRDwvc3Bhbj48c3Bhbj4weGU0NjU3MTM5ZTUwRTkwOTczMWRlNzAzRTE3MjgxMjgxOTdhOTA0NDc8L3NwYW4+PC9wPgogICAgICAgICAgICA8cCBjbGFzcz0icm93Ij48c3Bhbj5EZXBsb3ltZW50IFJhbms8L3NwYW4+PHNwYW4+NjAwMjwvc3Bhbj48L3A+CiAgICAgICAgICAgIDxwIGNsYXNzPSJyb3ciPjxzcGFuPkZpcnN0IERlcGxveW1lbnQ8L3NwYW4+PHNwYW4+Tm92IDA5LDIwMjM8L3NwYW4+PC9wPgogICAgICAgICAgPC9ib2R5PgogICAgICAgIDwvZm9yZWlnbk9iamVjdD4gCiAgICAgICAgPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIyODguNDYsOTQuNjYgMjU2LjMsNjIuMzEgMjU2LjMsMTUuNDUgMjg4LjQ2LDQ3LjgiLz4KICAgICAgPC9nPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuMDEsIDk1LjcxKSI+IAogICAgICAgIDxwYXRoIGNsYXNzPSJzdDYxIiBkPSJNMCAxNTMuNjIgUTMzLjI1OTIgNTQuMjAxNSwgNjYuMDQ2IDc2LjgwOTggUTcxLjUyMDIgNzcuODY1OSwgNzYuODEgNzYuODEgUTEzMS4zNDg1IC0wLjI1NDMsIDE1My42MiA2OS44ODE3Ii8+CiAgICAgIDwvZz4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDEiIHgxPSIzMi4xNTM0NCIgeTE9IjM5LjM0MTciIHgyPSI3MS4zODU0IiB5Mj0iOS45NDY3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTNGQkVEIi8+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMjUiIHN0b3AtY29sb3I9IiNGNDlCRkYiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC42NCIgc3RvcC1jb2xvcj0iI0ZGQkM0RiIvPgogICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY2ODRCIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MiIgeDE9IjYxLjUzNTgiIHkxPSIzNTAuODMxIiB4Mj0iMzc0Ljg5NSIgeTI9IjE4Ny4yMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5M0ZCRUQiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC4yNSIgc3RvcC1jb2xvcj0iI0Y0OUJGRiIvPgogICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjRkZCQzRGIi8+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjY4NEIiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQzIiB4MT0iMTA0Ljk5OTgiIHkxPSIzNjIuNTc5IiB4Mj0iMTIyLjcwNTgiIHkyPSIyODAuNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5M0ZCRUQiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC4yNSIgc3RvcC1jb2xvcj0iI0Y0OUJGRiIvPgogICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjRkZCQzRGIi8+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjY4NEIiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICA8L3N2Zz4gCiAg"

export default myNFT
