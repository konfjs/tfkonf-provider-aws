import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRumAppMonitorArgsAppMonitorConfiguration {
  allow_cookies?: boolean;
  enable_xray?: boolean;
  excluded_pages?: string[];
  favorite_pages?: string[];
  guest_role_arn?: string;
  identity_pool_id?: string;
  included_pages?: string[];
  session_sample_rate?: number;
  telemetries?: string[];
}

export interface AwsRumAppMonitorArgsCustomEvents {
  status?: string;
}

export interface AwsRumAppMonitorArgs {
  cw_log_enabled?: boolean;
  domain: string;
  name: string;
  tags?: { [key: string]: string };
  app_monitor_configuration?: AwsRumAppMonitorArgsAppMonitorConfiguration;
  custom_events?: AwsRumAppMonitorArgsCustomEvents;
}

export class aws_rum_app_monitor extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRumAppMonitorArgs) {
    const meta = {app_monitor_configuration:{isBlock:true},custom_events:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rum_app_monitor", resourceName);
  }

  get app_monitor_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_monitor_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cw_log_group(): string {
    return `${this.resourceType}.${this.resourceName}.cw_log_group`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
