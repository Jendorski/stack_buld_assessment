// base.entity.ts
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'string', nullable: false })
  email: string;

  @Column({ type: 'string', nullable: false })
  password: string;

  @Column({ type: 'string', nullable: false })
  status: string;
}
