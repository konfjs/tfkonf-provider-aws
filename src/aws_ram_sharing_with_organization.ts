import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamSharingWithOrganizationArgs {
}

export class aws_ram_sharing_with_organization extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRamSharingWithOrganizationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ram_sharing_with_organization", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
