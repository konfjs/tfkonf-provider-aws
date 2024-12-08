import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGameliftGameSessionQueueArgsPlayerLatencyPolicy {
  maximum_individual_player_latency_milliseconds: number;
  policy_duration_seconds?: number;
}

export interface AwsGameliftGameSessionQueueArgs {
  custom_event_data?: string;
  destinations?: string[];
  name: string;
  notification_target?: string;
  tags?: { [key: string]: string };
  timeout_in_seconds?: number;
  player_latency_policy?: AwsGameliftGameSessionQueueArgsPlayerLatencyPolicy[];
}

export class aws_gamelift_game_session_queue extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGameliftGameSessionQueueArgs) {
    const meta = {player_latency_policy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_gamelift_game_session_queue", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
