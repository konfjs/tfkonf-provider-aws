import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOamLinkArgs {
  link_identifier: string;
}

export class data_aws_oam_link extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOamLinkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_oam_link", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get label(): string {
    return `data.${this.resourceType}.${this.resourceName}.label`;
  }

  get label_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.label_template`;
  }

  get link_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.link_configuration`;
  }

  get link_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.link_id`;
  }

  get link_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.link_identifier`;
  }

  get resource_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_types`;
  }

  get sink_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.sink_arn`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
