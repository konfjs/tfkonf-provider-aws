import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53profilesResourceAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsRoute53profilesResourceAssociationArgs {
  name: string;
  profile_id: string;
  resource_arn: string;
  resource_properties?: string;
  timeouts?: AwsRoute53profilesResourceAssociationArgsTimeouts;
}

export class aws_route53profiles_resource_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53profilesResourceAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53profiles_resource_association", resourceName);
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

  get profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.profile_id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `${this.resourceType}.${this.resourceName}.status_message`;
  }
}
