import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPrometheusRuleGroupNamespaceArgs {
  data: string;
  name: string;
  workspace_id: string;
}

export class aws_prometheus_rule_group_namespace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPrometheusRuleGroupNamespaceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_prometheus_rule_group_namespace", resourceName);
  }

  get data(): string {
    return `${this.resourceType}.${this.resourceName}.data`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get workspace_id(): string {
    return `${this.resourceType}.${this.resourceName}.workspace_id`;
  }
}
