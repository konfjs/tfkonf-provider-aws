import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2ConfigurationSetArgsDeliveryOptions {
  sending_pool_name?: string;
  tls_policy?: string;
}

export interface AwsSesv2ConfigurationSetArgsReputationOptions {
}

export interface AwsSesv2ConfigurationSetArgsSendingOptions {
}

export interface AwsSesv2ConfigurationSetArgsSuppressionOptions {
  suppressed_reasons?: string[];
}

export interface AwsSesv2ConfigurationSetArgsTrackingOptions {
  custom_redirect_domain: string;
}

export interface AwsSesv2ConfigurationSetArgsVdmOptionsDashboardOptions {
  engagement_metrics?: string;
}

export interface AwsSesv2ConfigurationSetArgsVdmOptionsGuardianOptions {
  optimized_shared_delivery?: string;
}

export interface AwsSesv2ConfigurationSetArgsVdmOptions {
  dashboard_options?: AwsSesv2ConfigurationSetArgsVdmOptionsDashboardOptions;
  guardian_options?: AwsSesv2ConfigurationSetArgsVdmOptionsGuardianOptions;
}

export interface AwsSesv2ConfigurationSetArgs {
  configuration_set_name: string;
  tags?: { [key: string]: string };
  delivery_options?: AwsSesv2ConfigurationSetArgsDeliveryOptions;
  reputation_options?: AwsSesv2ConfigurationSetArgsReputationOptions;
  sending_options?: AwsSesv2ConfigurationSetArgsSendingOptions;
  suppression_options?: AwsSesv2ConfigurationSetArgsSuppressionOptions;
  tracking_options?: AwsSesv2ConfigurationSetArgsTrackingOptions;
  vdm_options?: AwsSesv2ConfigurationSetArgsVdmOptions;
}

export class aws_sesv2_configuration_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesv2ConfigurationSetArgs) {
    const meta = {delivery_options:{isBlock:true},reputation_options:{isBlock:true},sending_options:{isBlock:true},suppression_options:{isBlock:true},tracking_options:{isBlock:true},vdm_options:{isBlock:true,dashboard_options:{isBlock:true},guardian_options:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_configuration_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_set_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
