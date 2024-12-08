import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodestarconnectionsHostArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCodestarconnectionsHostArgsVpcConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
  tls_certificate?: string;
  vpc_id: string;
}

export interface AwsCodestarconnectionsHostArgs {
  name: string;
  provider_endpoint: string;
  provider_type: string;
  timeouts?: AwsCodestarconnectionsHostArgsTimeouts;
  vpc_configuration?: AwsCodestarconnectionsHostArgsVpcConfiguration;
}

export class aws_codestarconnections_host extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodestarconnectionsHostArgs) {
    const meta = {timeouts:{isBlock:true},vpc_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codestarconnections_host", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get provider_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.provider_endpoint`;
  }

  get provider_type(): string {
    return `${this.resourceType}.${this.resourceName}.provider_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
