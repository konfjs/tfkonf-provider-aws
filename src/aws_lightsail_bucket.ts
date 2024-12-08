import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailBucketArgs {
  bundle_id: string;
  force_delete?: boolean;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_lightsail_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLightsailBucketArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_bucket", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get bundle_id(): string {
    return `${this.resourceType}.${this.resourceName}.bundle_id`;
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get support_code(): string {
    return `${this.resourceType}.${this.resourceName}.support_code`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
