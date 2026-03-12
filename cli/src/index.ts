#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();
program.name("sss-token").description("Stablecoin OS operator CLI").version("0.2.0");
program.command("init").option("--preset <preset>").option("--custom <path>").action((options) => console.log("init", options));
program.command("status").action(() => console.log("status"));
program.command("supply").action(() => console.log("supply"));
program.command("pause").action(() => console.log("pause"));
program.command("unpause").action(() => console.log("unpause"));
program.command("mint").argument("<recipient>").argument("<amount>").action((recipient, amount) => console.log("mint", { recipient, amount }));
program.command("burn").argument("<holder>").argument("<amount>").action((holder, amount) => console.log("burn", { holder, amount }));
const policy = program.command("policy");
policy.command("list").action(() => console.log("policy list"));
policy.command("apply").argument("<path>").action((path) => console.log("policy apply", { path }));
policy.command("simulate").argument("<action>").option("--recipient <recipient>").option("--address <address>").option("--amount <amount>").action((action, options) => console.log("policy simulate", { action, ...options }));
const audit = program.command("audit");
audit.command("log").option("--action <type>").action((options) => console.log("audit log", options));
audit.command("export").option("--format <format>", "csv|json", "csv").action((options) => console.log("audit export", options));
const request = program.command("request");
request.command("mint").argument("<recipient>").argument("<amount>").action((recipient, amount) => console.log("request mint", { recipient, amount }));
program.command("approve").argument("<requestId>").action((requestId) => console.log("approve", { requestId }));
program.command("reject").argument("<requestId>").requiredOption("--reason <reason>").action((requestId, options) => console.log("reject", { requestId, ...options }));
program.parse();
