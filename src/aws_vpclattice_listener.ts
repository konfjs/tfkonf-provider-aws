import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeListenerArgsDefaultActionFixedResponse {
  status_code: number;
}

export interface AwsVpclatticeListenerArgsDefaultActionForwardTargetGroups {
  target_group_identifier?: string;
  weight?: number;
}

export interface AwsVpclatticeListenerArgsDefaultActionForward {
  target_groups?: AwsVpclatticeListenerArgsDefaultActionForwardTargetGroups[];
}

export interface AwsVpclatticeListenerArgsDefaultAction {
  fixed_response?: AwsVpclatticeListenerArgsDefaultActionFixedResponse;
  forward?: AwsVpclatticeListenerArgsDefaultActionForward[];
}

export interface AwsVpclatticeListenerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeListenerArgs {
  name: string;
  protocol: string;
  tags?: { [key: string]: string };
  default_action: AwsVpclatticeListenerArgsDefaultAction;
  timeouts?: AwsVpclatticeListenerArgsTimeouts;
}

export class aws_vpclattice_listener extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpclatticeListenerArgs) {
    const meta = {default_action:{isBlock:true,fixed_response:{isBlock:true},forward:{isBlock:true,target_groups:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_listener", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_at`;
  }

  get listener_id(): string {
    return `${this.resourceType}.${this.resourceName}.listener_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get service_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_arn`;
  }

  get service_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.service_identifier`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
