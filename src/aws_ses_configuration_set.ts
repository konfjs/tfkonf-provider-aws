import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesConfigurationSetArgsDeliveryOptions {
  tls_policy?: string;
}

export interface AwsSesConfigurationSetArgsTrackingOptions {
  custom_redirect_domain?: string;
}

export interface AwsSesConfigurationSetArgs {
  name: string;
  reputation_metrics_enabled?: boolean;
  sending_enabled?: boolean;
  delivery_options?: AwsSesConfigurationSetArgsDeliveryOptions;
  tracking_options?: AwsSesConfigurationSetArgsTrackingOptions;
}

export class aws_ses_configuration_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesConfigurationSetArgs) {
    const meta = {delivery_options:{isBlock:true},tracking_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ses_configuration_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_fresh_start(): string {
    return `${this.resourceType}.${this.resourceName}.last_fresh_start`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
