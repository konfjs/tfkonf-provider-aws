import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2AccountArgs {
}

export class aws_macie2_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMacie2AccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_macie2_account", resourceName);
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get finding_publishing_frequency(): string {
    return `${this.resourceType}.${this.resourceName}.finding_publishing_frequency`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_role(): string {
    return `${this.resourceType}.${this.resourceName}.service_role`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
