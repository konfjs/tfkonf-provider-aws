import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53profilesAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRoute53profilesAssociationArgs {
  name: string;
  profile_id: string;
  resource_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRoute53profilesAssociationArgsTimeouts;
}

export class aws_route53profiles_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53profilesAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route53profiles_association", resourceName);
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

  get profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.profile_id`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
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
