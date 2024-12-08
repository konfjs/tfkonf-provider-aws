import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMedialiveInputSecurityGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMedialiveInputSecurityGroupArgsWhitelistRules {
  cidr: string;
}

export interface AwsMedialiveInputSecurityGroupArgs {
  tags?: { [key: string]: string };
  timeouts?: AwsMedialiveInputSecurityGroupArgsTimeouts;
  whitelist_rules: AwsMedialiveInputSecurityGroupArgsWhitelistRules[];
}

export class aws_medialive_input_security_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMedialiveInputSecurityGroupArgs) {
    const meta = {timeouts:{isBlock:true},whitelist_rules:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_medialive_input_security_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get inputs(): string {
    return `${this.resourceType}.${this.resourceName}.inputs`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
