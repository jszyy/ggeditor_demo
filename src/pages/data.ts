const currentData = {
  nodes: [
    {
      type: 'node',
      size: '40',
      color: '#69C0FF',
      label: '文字可以自定义',
      labelOffsetY: 28,
      icon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
      x: 150.79999542236328,
      y: 109.4000015258789,
      id: 'a9e43168',
      index: 0,
    },
    {
      type: 'node',
      size: '40',
      color: '#69C0FF',
      label: '背景可以自定义',
      labelOffsetY: 28,
      icon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
      x: 302.7999954223633,
      y: 113.4000015258789,
      id: '92bcdd83',
      index: 1,
    },
    {
      type: 'node',
      size: '40',
      color: '#69C0FF',
      label: '形状可以自定义',
      labelOffsetY: 28,
      icon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
      x: 234.79999542236328,
      y: 48.400001525878906,
      id: '12749a94',
      index: 2,
    },
    {
      type: 'node',
      size: '40',
      shape: 'flow-rect',
      color: '#69C0FF',
      label: 'Bank',
      labelOffsetY: 28,
      icon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
      x: 102.79999542236328,
      y: 217.4000015258789,
      id: '705d4846',
      index: 3,
    },
    {
      type: 'node',
      size: '40',
      shape: 'koni-custom-node',
      color: '#B37FEB',
      label: 'Country',
      labelOffsetY: 28,
      icon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
      x: 382.7999954223633,
      y: 231.4000015258789,
      id: '971976e4',
      index: 4,
    },
    {
      type: 'node',
      size: '40',
      color: '#69C0FF',
      label: '图标可以自定义',
      labelOffsetY: 28,
      icon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
      x: 240.79999542236328,
      y: 345.4000015258789,
      id: '5416bb5a',
      index: 5,
    },
    {
      type: 'node',
      size: '40',
      shape: 'koni-custom-node',
      color: '#5CDBD3',
      label: 'Person',
      labelOffsetY: 28,
      icon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjM1IDExLjUxNGwuMDEtLjAxNEE2Ljk2NiA2Ljk2NiAwIDAgMCAxNCA3YTYuOTczIDYuOTczIDAgMCAwLTEuNjM3LTQuNWwtLjAxMS0uMDEzLS4wNS0uMDU3LS4wMi0uMDIyLS4wNjMtLjA3NC0uMDAyLS4wMDEtLjA3Mi0uMDgtLjAwMS0uMDAxYy0uMDUtLjA1NC0uMS0uMTA3LS4xNTItLjE1OGwtLjAwMS0uMDAyLS4wNzUtLjA3NS0uMDA1LS4wMDQtLjA3LS4wNjgtLjAyNS0uMDIzLS4wNDctLjA0NC0uMDE2LS4wMTZBNi45NjYgNi45NjYgMCAwIDAgNyAwYTYuOTczIDYuOTczIDAgMCAwLTQuNzU1IDEuODYybC0uMDE1LjAxNi0uMDQ3LjA0NS0uMDI1LjAyNC0uMDcuMDY3LS4wMDUuMDA1LS4wNzUuMDc1LS4wMDIuMDAxLS4xNTEuMTU4LS4wMDIuMDAyYTMuMzA5IDMuMzA5IDAgMCAwLS4wNzIuMDhIMS43OGExLjQzNiAxLjQzNiAwIDAgMC0uMDY0LjA3NGwtLjAyLjAyMmMtLjAxNi4wMTktLjAzMi4wNC0uMDUuMDU4LS4wMDIuMDA1LS4wMDcuMDA4LS4wMS4wMTNBNi45NzMgNi45NzMgMCAwIDAgMCA3YzAgMS43MTQuNjE2IDMuMjgzIDEuNjM4IDQuNWwuMDEuMDE0LjA0OS4wNTguMDE5LjAyMi4wNjQuMDczLjAwMS4wMDNjLjAyNC4wMjcuMDQ3LjA1My4wNzIuMDc4bC4wMDIuMDAyLjE1LjE1OC4wMDEuMDAxLjA3NC4wNzQuMDA0LjAwNUE2Ljk4NyA2Ljk4NyAwIDAgMCA3IDE0YTYuOTczIDYuOTczIDAgMCAwIDQuOTEtMi4wMTJsLjAwNi0uMDA1Yy4wMjUtLjAyNS4wNS0uMDQ5LjA3My0uMDc0bC4wMDItLjAwMWE0LjczIDQuNzMgMCAwIDAgLjE1LS4xNThsLjAwMS0uMDAyYy4wMjQtLjAyNi4wNDktLjA1MS4wNzItLjA3OCAwLS4wMDEuMDAyLS4wMDEuMDAyLS4wMDMuMDIyLS4wMjMuMDQzLS4wNDguMDY0LS4wNzNsLjAxOC0uMDIyYy4wMi0uMDIuMDM2LS4wNC4wNTItLjA1OHptLjA2NC0yLjIyOGMtLjIxNi41MS0uNS45ODEtLjg0NyAxLjQxYTYuOTM5IDYuOTM5IDAgMCAwLTEuMjczLS44NzRjLjE4MS0uNzMzLjI5My0xLjUzOC4zMjMtMi4zODRoMi4yNDJhNS44NDIgNS44NDIgMCAwIDEtLjQ0NSAxLjg0OHptLjQ0NS0yLjcyM2gtMi4yNDJhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzLTIuMzg1IDYuOTM5IDYuOTM5IDAgMCAwIDEuMjczLS44NzMgNS44NDIgNS44NDIgMCAwIDEgMS4yOTIgMy4yNTh6TTkuMjg2IDEuNTg1YTUuODQgNS44NCAwIDAgMSAxLjY4MSAxLjA4MWMtLjI4OS4yNDctLjYuNDY0LS45MjguNjUzLS4yNDUtLjcwMy0uNTYtMS4zMTQtLjkyNS0xLjgwMy4wNTguMDIyLjExNi4wNDYuMTcyLjA2OXpNNy44NyAxMi41MzNhMS43NjggMS43NjggMCAwIDEtLjQzMy4yNTZWOS44OTFhNi4wOCA2LjA4IDAgMCAxIDEuODA4LjQwOWMtLjEzLjM4NC0uMjguNzQtLjQ1MyAxLjA2LS4yNzIuNTA2LS41OS45MS0uOTIyIDEuMTczem0uOTIyLTkuODkyYy4xNzIuMzIxLjMyNC42NzYuNDUzIDEuMDU5YTYuMDggNi4wOCAwIDAgMS0xLjgwNy40MVYxLjIxMWMuMTQzLjA1OC4yODkuMTQzLjQzMi4yNTcuMzMyLjI2LjY1LjY2NS45MjIgMS4xNzJ6TTcuNDM4IDkuMDE0VjcuNDM4aDIuMzA0Yy0uMDI1LjY5LS4xMSAxLjM2LS4yNTUgMS45OTZsLS4wMDQuMDJhNi45NTMgNi45NTMgMCAwIDAtMi4wNDYtLjQ0em0wLTIuNDUxVjQuOTg2YTYuOTUzIDYuOTUzIDAgMCAwIDIuMDQ1LS40NGwuMDA1LjAyYy4xNDMuNjM2LjIzIDEuMzA0LjI1NCAxLjk5N0g3LjQzN3ptLS44NzUuODc1djEuNTc2YTYuOTUzIDYuOTUzIDAgMCAwLTIuMDQ2LjQ0bC0uMDA1LS4wMmExMC44MzUgMTAuODM1IDAgMCAxLS4yNTQtMS45OTZoMi4zMDR6bS0yLjMwNS0uODc1Yy4wMjUtLjY5MS4xMS0xLjM2MS4yNTUtMS45OTdsLjAwNC0uMDJhNi45NDMgNi45NDMgMCAwIDAgMi4wNDUuNDR2MS41NzdINC4yNTh6TTYuNTYyIDkuODl2Mi44OTZhMS43NDggMS43NDggMCAwIDEtLjQzMi0uMjU2Yy0uMzMyLS4yNi0uNjUyLS42NjctLjkyNC0xLjE3M2E3LjA2IDcuMDYgMCAwIDEtLjQ1My0xLjA2IDYuMDk4IDYuMDk4IDAgMCAxIDEuODEtLjQwN3ptMC01Ljc4MkE2LjA4IDYuMDggMCAwIDEgNC43NTUgMy43Yy4xMy0uMzg0LjI4LS43NC40NTMtMS4wNi4yNzItLjUwNi41OS0uOTEyLjkyMy0xLjE3M2ExLjggMS44IDAgMCAxIC40MzMtLjI1NnYyLjg5OGgtLjAwMnpNNC43MTUgMS41ODZjLjA1OC0uMDI0LjExNC0uMDQ3LjE3Mi0uMDY5LS4zNjYuNDktLjY4IDEuMS0uOTI1IDEuODAzYTYuMDU3IDYuMDU3IDAgMCAxLS45MjgtLjY1MyA1Ljg0IDUuODQgMCAwIDEgMS42ODEtMS4wODF6TTEuNTg2IDQuNzE0Yy4yMTYtLjUxLjUtLjk4MS44NDctMS40MS4zODkuMzM3LjgxNS42MyAxLjI3My44NzRhMTEuNjgxIDExLjY4MSAwIDAgMC0uMzIzIDIuMzg1SDEuMTRhNS44IDUuOCAwIDAgMSAuNDQ1LTEuODQ5ek0xLjE0IDcuNDM3aDIuMjQyYy4wMy44NDcuMTQyIDEuNjUyLjMyMyAyLjM4NWE2LjkzOSA2LjkzOSAwIDAgMC0xLjI3My44NzNBNS44NDIgNS44NDIgMCAwIDEgMS4xNCA3LjQzN3ptMy41NzMgNC45NzdhNS44NCA1Ljg0IDAgMCAxLTEuNjgxLTEuMDgxYy4yODktLjI0Ny42LS40NjQuOTI4LS42NTMuMjQ1LjcwMy41NiAxLjMxNC45MjUgMS44MDNhNS42MjQgNS42MjQgMCAwIDEtLjE3Mi0uMDY5em00LjU3MiAwYTYuMTY4IDYuMTY4IDAgMCAxLS4xNzIuMDY5Yy4zNjYtLjQ5LjY4LTEuMS45MjUtMS44MDMuMzI4LjE4Ny42NC40MDYuOTI4LjY1M2E1Ljg0IDUuODQgMCAwIDEtMS42ODEgMS4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+',
      x: 235.29999542236328,
      y: 217.9000015258789,
      id: '01c096e5',
      index: 10,
    },
  ],
  edges: [
    {
      source: '12749a94',
      target: 'a9e43168',
      id: 'b9b7de0c',
      index: 6,
    },
    {
      source: '12749a94',
      target: '92bcdd83',
      id: 'b1f64b57',
      index: 7,
    },
    {
      source: 'a9e43168',
      target: '705d4846',
      id: '85c2e4f1',
      index: 8,
    },
    {
      source: '705d4846',
      target: '5416bb5a',
      id: '344af072',
      index: 9,
    },
    {
      source: '01c096e5',
      target: 'a9e43168',
      id: '1ed3bdf7',
      index: 11,
    },
    {
      source: '92bcdd83',
      target: '01c096e5',
      id: '126f4040',
      index: 12,
    },
    {
      source: '92bcdd83',
      target: '971976e4',
      id: '2fbccbe9',
      index: 13,
    },
    {
      source: '971976e4',
      target: '01c096e5',
      id: 'a74eeb93',
      index: 14,
    },
    {
      source: '971976e4',
      target: '5416bb5a',
      id: '266e28fc',
      index: 15,
    },
    {
      source: '705d4846',
      target: '01c096e5',
      id: 'd8ad4c47',
      index: 16,
    },
    {
      source: '01c096e5',
      target: '5416bb5a',
      id: 'a80e77fc',
      index: 17,
    },
  ],
};

export default currentData;
