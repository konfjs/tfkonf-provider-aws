import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSyntheticsGroupAssociationArgs {
  canary_arn: string;
  group_name: string;
}

export class aws_synthetics_group_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSyntheticsGroupAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_synthetics_group_association", resourceName);
  }

  get canary_arn(): string {
    return `${this.resourceType}.${this.resourceName}.canary_arn`;
  }

  get group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.group_arn`;
  }

  get group_id(): string {
    return `${this.resourceType}.${this.resourceName}.group_id`;
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
