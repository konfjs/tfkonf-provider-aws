import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerConnectionArgs {
  connection_name: string;
  provider_type: string;
  tags?: { [key: string]: string };
}

export class aws_apprunner_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApprunnerConnectionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get connection_name(): string {
    return `${this.resourceType}.${this.resourceName}.connection_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get provider_type(): string {
    return `${this.resourceType}.${this.resourceName}.provider_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
