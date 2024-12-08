import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxScalingGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxScalingGroupArgs {
  availability_zone_id: string;
  environment_id: string;
  host_type: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsFinspaceKxScalingGroupArgsTimeouts;
}

export class aws_finspace_kx_scaling_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFinspaceKxScalingGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_finspace_kx_scaling_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get clusters(): string {
    return `${this.resourceType}.${this.resourceName}.clusters`;
  }

  get created_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.created_timestamp`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get host_type(): string {
    return `${this.resourceType}.${this.resourceName}.host_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_timestamp`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `${this.resourceType}.${this.resourceName}.status_reason`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
