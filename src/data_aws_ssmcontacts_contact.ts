import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmcontactsContactArgs {
  arn: string;
}

export class data_aws_ssmcontacts_contact extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsmcontactsContactArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssmcontacts_contact", resourceName);
  }

  get alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.alias`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
