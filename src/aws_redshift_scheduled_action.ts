import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftScheduledActionArgsTargetActionPauseCluster {
  cluster_identifier: string;
}

export interface AwsRedshiftScheduledActionArgsTargetActionResizeCluster {
  classic?: boolean;
  cluster_identifier: string;
  cluster_type?: string;
  node_type?: string;
  number_of_nodes?: number;
}

export interface AwsRedshiftScheduledActionArgsTargetActionResumeCluster {
  cluster_identifier: string;
}

export interface AwsRedshiftScheduledActionArgsTargetAction {
  pause_cluster?: AwsRedshiftScheduledActionArgsTargetActionPauseCluster;
  resize_cluster?: AwsRedshiftScheduledActionArgsTargetActionResizeCluster;
  resume_cluster?: AwsRedshiftScheduledActionArgsTargetActionResumeCluster;
}

export interface AwsRedshiftScheduledActionArgs {
  description?: string;
  enable?: boolean;
  end_time?: string;
  iam_role: string;
  name: string;
  schedule: string;
  start_time?: string;
  target_action: AwsRedshiftScheduledActionArgsTargetAction;
}

export class aws_redshift_scheduled_action extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftScheduledActionArgs) {
    const meta = {target_action:{isBlock:true,pause_cluster:{isBlock:true},resize_cluster:{isBlock:true},resume_cluster:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_redshift_scheduled_action", resourceName);
  }

  get iam_role(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get schedule(): string {
    return `${this.resourceType}.${this.resourceName}.schedule`;
  }
}
