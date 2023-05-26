// deno-lint-ignore-file ban-ts-comment
import * as cliffy from "cliffy";
// import chalk from "npm:chalk@5";
import * as colors from "https://deno.land/std@0.188.0/fmt/colors.ts"

// @ts-ignore
await new cliffy.Command()
  .name("denoplay")
  .version("0.1.0")
  .description("Command line framework for Deno")
  .command("completions", new cliffy.CompletionsCommand())
  .command(
    "hello",
    new cliffy.Command()
      .action(() => console.log(colors.green("Hello World!")))
      .description("Prints Hello World!"),
  )
  .parse(Deno.args);
