import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicequotasServiceQuotaArgs {
  service_code: string;
}

export class data_aws_servicequotas_service_quota extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServicequotasServiceQuotaArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_servicequotas_service_quota", resourceName);
  }

  get adjustable(): string {
    return `data.${this.resourceType}.${this.resourceName}.adjustable`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_value(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_value`;
  }

  get global_quota(): string {
    return `data.${this.resourceType}.${this.resourceName}.global_quota`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get quota_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.quota_code`;
  }

  get quota_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.quota_name`;
  }

  get service_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_code`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }

  get usage_metric(): string {
    return `data.${this.resourceType}.${this.resourceName}.usage_metric`;
  }

  get value(): string {
    return `data.${this.resourceType}.${this.resourceName}.value`;
  }
}
