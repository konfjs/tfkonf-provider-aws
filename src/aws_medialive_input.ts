import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMedialiveInputArgsDestinations {
  stream_name: string;
}

export interface AwsMedialiveInputArgsInputDevices {
  id: string;
}

export interface AwsMedialiveInputArgsMediaConnectFlows {
  flow_arn: string;
}

export interface AwsMedialiveInputArgsSources {
  password_param: string;
  url: string;
  username: string;
}

export interface AwsMedialiveInputArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMedialiveInputArgsVpc {
  security_group_ids?: string[];
  subnet_ids: string[];
}

export interface AwsMedialiveInputArgs {
  input_security_groups?: string[];
  name: string;
  tags?: { [key: string]: string };
  type: string;
  destinations?: AwsMedialiveInputArgsDestinations[];
  input_devices?: AwsMedialiveInputArgsInputDevices[];
  media_connect_flows?: AwsMedialiveInputArgsMediaConnectFlows[];
  sources?: AwsMedialiveInputArgsSources[];
  timeouts?: AwsMedialiveInputArgsTimeouts;
  vpc?: AwsMedialiveInputArgsVpc;
}

export class aws_medialive_input extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMedialiveInputArgs) {
    const meta = {destinations:{isBlock:true},input_devices:{isBlock:true},media_connect_flows:{isBlock:true},sources:{isBlock:true},timeouts:{isBlock:true},vpc:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_medialive_input", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get attached_channels(): string {
    return `${this.resourceType}.${this.resourceName}.attached_channels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get input_class(): string {
    return `${this.resourceType}.${this.resourceName}.input_class`;
  }

  get input_partner_ids(): string {
    return `${this.resourceType}.${this.resourceName}.input_partner_ids`;
  }

  get input_source_type(): string {
    return `${this.resourceType}.${this.resourceName}.input_source_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
