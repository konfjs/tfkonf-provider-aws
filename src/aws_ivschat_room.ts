import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIvschatRoomArgsMessageReviewHandler {
  uri?: string;
}

export interface AwsIvschatRoomArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsIvschatRoomArgs {
  logging_configuration_identifiers?: string[];
  name?: string;
  tags?: { [key: string]: string };
  message_review_handler?: AwsIvschatRoomArgsMessageReviewHandler;
  timeouts?: AwsIvschatRoomArgsTimeouts;
}

export class aws_ivschat_room extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIvschatRoomArgs) {
    const meta = {message_review_handler:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ivschat_room", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get maximum_message_length(): string {
    return `${this.resourceType}.${this.resourceName}.maximum_message_length`;
  }

  get maximum_message_rate_per_second(): string {
    return `${this.resourceType}.${this.resourceName}.maximum_message_rate_per_second`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
