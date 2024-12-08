import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPrometheusAlertManagerDefinitionArgs {
  definition: string;
  workspace_id: string;
}

export class aws_prometheus_alert_manager_definition extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPrometheusAlertManagerDefinitionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_prometheus_alert_manager_definition", resourceName);
  }

  get definition(): string {
    return `${this.resourceType}.${this.resourceName}.definition`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
