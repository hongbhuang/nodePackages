```javascript
concurrently [options] <command ...>

General
  -m, --max-processes          How many processes should run at once.
                               New processes only spawn after all restart tries
                               of a process.
                               Exact number or a percent of CPUs available (for
                               example "50%")                           [string]
  -n, --names                  List of custom names to be used in prefix
                               template.
                               Example names: "main,browser,server"     [string]
      --name-separator         The character to split <names> on. Example usage:
                               -n "styles|scripts|server" --name-separator "|"
                                                                  [default: ","]
  -s, --success                Which command(s) must exit with code 0 in order
                               for concurrently exit with code 0 too. Options
                               are:
                               - "first" for the first command to exit;
                               - "last" for the last command to exit;
                               - "all" for all commands;
                               - "command-{name}"/"command-{index}" for the
                               commands with that name or index;
                               - "!command-{name}"/"!command-{index}" for all
                               commands but the ones with that name or index.
                                                                [default: "all"]
  -r, --raw                    Output only raw output of processes, disables
                               prettifying and concurrently coloring.  [boolean]
      --no-color               Disables colors from logging            [boolean]
      --hide                   Comma-separated list of processes to hide the
                               output.
                               The processes can be identified by their name or
                               index.                     [string] [default: ""]
  -g, --group                  Order the output as if the commands were run
                               sequentially.                           [boolean]
      --timings                Show timing information for all processes.
                                                      [boolean] [default: false]
  -P, --passthrough-arguments  Passthrough additional arguments to commands
                               (accessible via placeholders) instead of treating
                               them as commands.      [boolean] [default: false]

Prefix styling
  -p, --prefix            Prefix used in logging for each process.
                          Possible values: index, pid, time, command, name,
                          none, or a template. Example template: "{time}-{pid}"
                         [string] [default: index or name (when --names is set)]
  -c, --prefix-colors     Comma-separated list of chalk colors to use on
                          prefixes. If there are more commands than colors, the
                          last color will be repeated.
                          - Available modifiers: reset, bold, dim, italic,
                          underline, inverse, hidden, strikethrough
                          - Available colors: black, red, green, yellow, blue,
                          magenta, cyan, white, gray,
                          any hex values for colors (e.g. #23de43) or auto for
                          an automatically picked color
                          - Available background colors: bgBlack, bgRed,
                          bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite
                          See https://www.npmjs.com/package/chalk for more
                          information.               [string] [default: "reset"]
  -l, --prefix-length     Limit how many characters of the command is displayed
                          in prefix. The option can be used to shorten the
                          prefix when it is set to "command"
                                                          [number] [default: 10]
  -t, --timestamp-format  Specify the timestamp in moment/date-fns format.
                                   [string] [default: "yyyy-MM-dd HH:mm:ss.SSS"]

Input handling
  -i, --handle-input          Whether input should be forwarded to the child
                              processes. See examples for more information.
                                                                       [boolean]
      --default-input-target  Identifier for child process to which input on
                              stdin should be sent if not specified at start of
                              input.
                              Can be either the index or the name of the
                              process.                              [default: 0]

Killing other processes
  -k, --kill-others          Kill other processes if one exits or dies.[boolean]
      --kill-others-on-fail  Kill other processes if one exits with non zero
                             status code.                              [boolean]

Restarting
      --restart-tries  How many times a process that died should restart.
                       Negative numbers will make the process restart forever.
                                                           [number] [default: 0]
      --restart-after  Delay time to respawn the process, in milliseconds.
                                                           [number] [default: 0]

Options:
  -h, --help         Show help                                         [boolean]
  -v, -V, --version  Show version number                               [boolean]


Examples:

 - Output nothing more than stdout+stderr of child processes

     $ concurrently --raw "npm run watch-less" "npm run watch-js"

 - Normal output but without colors e.g. when logging to file

     $ concurrently --no-color "grunt watch" "http-server" > log

 - Custom prefix

     $ concurrently --prefix "{time}-{pid}" "npm run watch" "http-server"

 - Custom names and colored prefixes

     $ concurrently --names "HTTP,WATCH" -c "bgBlue.bold,bgMagenta.bold"
     "http-server" "npm run watch"

 - Auto varying colored prefixes

     $ concurrently -c "auto" "npm run watch" "http-server"

 - Mixing auto and manual colored prefixes

     $ concurrently -c "red,auto" "npm run watch" "http-server" "echo hello"

 - Configuring via environment variables with CONCURRENTLY_ prefix

     $ CONCURRENTLY_RAW=true CONCURRENTLY_KILL_OTHERS=true concurrently "echo
     hello" "echo world"

 - Send input to default

     $ concurrently --handle-input "nodemon" "npm run watch-js"
     rs  # Sends rs command to nodemon process

 - Send input to specific child identified by index

     $ concurrently --handle-input "npm run watch-js" nodemon
     1:rs

 - Send input to specific child identified by name

     $ concurrently --handle-input -n js,srv "npm run watch-js" nodemon
     srv:rs

 - Shortened NPM run commands

     $ concurrently npm:watch-node npm:watch-js npm:watch-css

 - Shortened NPM run command with wildcard (make sure to wrap it in quotes!)

     $ concurrently "npm:watch-*"

 - Exclude patterns so that between "lint:js" and "lint:fix:js", only "lint:js"
 is ran

     $ concurrently "npm:*(!fix)"

 - Passthrough some additional arguments via '{<number>}' placeholder

     $ concurrently -P "echo {1}" -- foo

 - Passthrough all additional arguments via '{@}' placeholder

     $ concurrently -P "npm:dev-* -- {@}" -- --watch --noEmit

 - Passthrough all additional arguments combined via '{*}' placeholder

     $ concurrently -P "npm:dev-* -- {*}" -- --watch --noEmit

For more details, visit https://github.com/open-cli-tools/concurrently
```
