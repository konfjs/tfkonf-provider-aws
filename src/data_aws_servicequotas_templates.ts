import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicequotasTemplatesArgsTemplates {
}

export interface DataAwsServicequotasTemplatesArgs {
  region: string;
  templates?: DataAwsServicequotasTemplatesArgsTemplates[];
}

export class data_aws_servicequotas_templates extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServicequotasTemplatesArgs) {
    const meta = {templates:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_servicequotas_templates", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
