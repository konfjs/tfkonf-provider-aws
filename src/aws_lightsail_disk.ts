import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDiskArgs {
  availability_zone: string;
  name: string;
  size_in_gb: number;
  tags?: { [key: string]: string };
}

export class aws_lightsail_disk extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailDiskArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_disk", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get size_in_gb(): string {
    return `${this.resourceType}.${this.resourceName}.size_in_gb`;
  }

  get support_code(): string {
    return `${this.resourceType}.${this.resourceName}.support_code`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
