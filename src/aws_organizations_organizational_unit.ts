import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOrganizationsOrganizationalUnitArgs {
  name: string;
  parent_id: string;
  tags?: { [key: string]: string };
}

export class aws_organizations_organizational_unit extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOrganizationsOrganizationalUnitArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_organizations_organizational_unit", resourceName);
  }

  get accounts(): string {
    return `${this.resourceType}.${this.resourceName}.accounts`;
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

  get parent_id(): string {
    return `${this.resourceType}.${this.resourceName}.parent_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
