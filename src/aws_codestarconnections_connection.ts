import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodestarconnectionsConnectionArgs {
  host_arn?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_codestarconnections_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodestarconnectionsConnectionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codestarconnections_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get connection_status(): string {
    return `${this.resourceType}.${this.resourceName}.connection_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get provider_type(): string {
    return `${this.resourceType}.${this.resourceName}.provider_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
