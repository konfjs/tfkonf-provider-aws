import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkfirewallLoggingConfigurationArgsLoggingConfigurationLogDestinationConfig {
  log_destination: { [key: string]: string };
  log_destination_type: string;
  log_type: string;
}

export interface AwsNetworkfirewallLoggingConfigurationArgsLoggingConfiguration {
  log_destination_config: AwsNetworkfirewallLoggingConfigurationArgsLoggingConfigurationLogDestinationConfig[];
}

export interface AwsNetworkfirewallLoggingConfigurationArgs {
  firewall_arn: string;
  logging_configuration: AwsNetworkfirewallLoggingConfigurationArgsLoggingConfiguration;
}

export class aws_networkfirewall_logging_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkfirewallLoggingConfigurationArgs) {
    const meta = {logging_configuration:{isBlock:true,log_destination_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_networkfirewall_logging_configuration", resourceName);
  }

  get firewall_arn(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
