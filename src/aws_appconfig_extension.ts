import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigExtensionArgsActionPointAction {
  description?: string;
  name: string;
  role_arn?: string;
  uri: string;
}

export interface AwsAppconfigExtensionArgsActionPoint {
  point: string;
  action: AwsAppconfigExtensionArgsActionPointAction[];
}

export interface AwsAppconfigExtensionArgsParameter {
  description?: string;
  name: string;
  required?: boolean;
}

export interface AwsAppconfigExtensionArgs {
  name: string;
  tags?: { [key: string]: string };
  action_point: AwsAppconfigExtensionArgsActionPoint[];
  parameter?: AwsAppconfigExtensionArgsParameter[];
}

export class aws_appconfig_extension extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppconfigExtensionArgs) {
    const meta = {action_point:{isBlock:true,action:{isBlock:true}},parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_extension", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
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

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
