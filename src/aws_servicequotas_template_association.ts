import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicequotasTemplateAssociationArgs {
  skip_destroy?: boolean;
}

export class aws_servicequotas_template_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServicequotasTemplateAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_servicequotas_template_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
