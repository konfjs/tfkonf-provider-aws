import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicequotasTemplateArgs {
  quota_code: string;
  region: string;
  service_code: string;
  value: number;
}

export class aws_servicequotas_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicequotasTemplateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_servicequotas_template", resourceName);
  }

  get global_quota(): string {
    return `${this.resourceType}.${this.resourceName}.global_quota`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get quota_code(): string {
    return `${this.resourceType}.${this.resourceName}.quota_code`;
  }

  get quota_name(): string {
    return `${this.resourceType}.${this.resourceName}.quota_name`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get service_code(): string {
    return `${this.resourceType}.${this.resourceName}.service_code`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get unit(): string {
    return `${this.resourceType}.${this.resourceName}.unit`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
