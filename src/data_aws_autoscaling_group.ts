import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAutoscalingGroupArgs {
  name: string;
}

export class data_aws_autoscaling_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAutoscalingGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_autoscaling_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get default_cooldown(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_cooldown`;
  }

  get desired_capacity(): string {
    return `data.${this.resourceType}.${this.resourceName}.desired_capacity`;
  }

  get desired_capacity_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.desired_capacity_type`;
  }

  get enabled_metrics(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled_metrics`;
  }

  get health_check_grace_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.health_check_grace_period`;
  }

  get health_check_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.health_check_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_maintenance_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_maintenance_policy`;
  }

  get launch_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.launch_configuration`;
  }

  get launch_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.launch_template`;
  }

  get load_balancers(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancers`;
  }

  get max_instance_lifetime(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_instance_lifetime`;
  }

  get max_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_size`;
  }

  get min_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_size`;
  }

  get mixed_instances_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.mixed_instances_policy`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get new_instances_protected_from_scale_in(): string {
    return `data.${this.resourceType}.${this.resourceName}.new_instances_protected_from_scale_in`;
  }

  get placement_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.placement_group`;
  }

  get predicted_capacity(): string {
    return `data.${this.resourceType}.${this.resourceName}.predicted_capacity`;
  }

  get service_linked_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_linked_role_arn`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get suspended_processes(): string {
    return `data.${this.resourceType}.${this.resourceName}.suspended_processes`;
  }

  get tag(): string {
    return `data.${this.resourceType}.${this.resourceName}.tag`;
  }

  get target_group_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_group_arns`;
  }

  get termination_policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.termination_policies`;
  }

  get traffic_source(): string {
    return `data.${this.resourceType}.${this.resourceName}.traffic_source`;
  }

  get vpc_zone_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_zone_identifier`;
  }

  get warm_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.warm_pool`;
  }

  get warm_pool_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.warm_pool_size`;
  }
}
