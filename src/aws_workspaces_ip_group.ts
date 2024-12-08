import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWorkspacesIpGroupArgsRules {
  description?: string;
  source: string;
}

export interface AwsWorkspacesIpGroupArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  rules?: AwsWorkspacesIpGroupArgsRules[];
}

export class aws_workspaces_ip_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWorkspacesIpGroupArgs) {
    const meta = {rules:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_workspaces_ip_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
