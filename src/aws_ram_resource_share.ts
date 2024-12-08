import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamResourceShareArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRamResourceShareArgs {
  allow_external_principals?: boolean;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRamResourceShareArgsTimeouts;
}

export class aws_ram_resource_share extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRamResourceShareArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ram_resource_share", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get permission_arns(): string {
    return `${this.resourceType}.${this.resourceName}.permission_arns`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
