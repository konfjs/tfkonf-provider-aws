import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailInstancePublicPortsArgsPortInfo {
  from_port: number;
  protocol: string;
  to_port: number;
}

export interface AwsLightsailInstancePublicPortsArgs {
  instance_name: string;
  port_info: AwsLightsailInstancePublicPortsArgsPortInfo[];
}

export class aws_lightsail_instance_public_ports extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailInstancePublicPortsArgs) {
    const meta = {port_info:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_instance_public_ports", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
  }
}
