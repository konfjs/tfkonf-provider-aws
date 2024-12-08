import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53profilesProfileArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsRoute53profilesProfileArgs {
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRoute53profilesProfileArgsTimeouts;
}

export class aws_route53profiles_profile extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53profilesProfileArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53profiles_profile", resourceName);
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

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get share_status(): string {
    return `${this.resourceType}.${this.resourceName}.share_status`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `${this.resourceType}.${this.resourceName}.status_message`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
