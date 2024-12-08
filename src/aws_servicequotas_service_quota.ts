import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicequotasServiceQuotaArgs {
  quota_code: string;
  service_code: string;
  value: number;
}

export class aws_servicequotas_service_quota extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicequotasServiceQuotaArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_servicequotas_service_quota", resourceName);
  }

  get adjustable(): string {
    return `${this.resourceType}.${this.resourceName}.adjustable`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_value(): string {
    return `${this.resourceType}.${this.resourceName}.default_value`;
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

  get request_id(): string {
    return `${this.resourceType}.${this.resourceName}.request_id`;
  }

  get request_status(): string {
    return `${this.resourceType}.${this.resourceName}.request_status`;
  }

  get service_code(): string {
    return `${this.resourceType}.${this.resourceName}.service_code`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get usage_metric(): string {
    return `${this.resourceType}.${this.resourceName}.usage_metric`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
