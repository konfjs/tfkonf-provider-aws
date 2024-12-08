import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloud9EnvironmentEc2Args {
  automatic_stop_time_minutes?: number;
  connection_type?: string;
  description?: string;
  image_id: string;
  instance_type: string;
  name: string;
  subnet_id?: string;
  tags?: { [key: string]: string };
}

export class aws_cloud9_environment_ec2 extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloud9EnvironmentEc2Args) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloud9_environment_ec2", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `${this.resourceType}.${this.resourceName}.image_id`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_arn(): string {
    return `${this.resourceType}.${this.resourceName}.owner_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
