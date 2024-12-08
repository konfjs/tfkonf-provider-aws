import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmMaintenanceWindowArgs {
  allow_unassociated_targets?: boolean;
  cutoff: number;
  description?: string;
  duration: number;
  enabled?: boolean;
  end_date?: string;
  name: string;
  schedule: string;
  schedule_offset?: number;
  schedule_timezone?: string;
  start_date?: string;
  tags?: { [key: string]: string };
}

export class aws_ssm_maintenance_window extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmMaintenanceWindowArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssm_maintenance_window", resourceName);
  }

  get cutoff(): string {
    return `${this.resourceType}.${this.resourceName}.cutoff`;
  }

  get duration(): string {
    return `${this.resourceType}.${this.resourceName}.duration`;
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
