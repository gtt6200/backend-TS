import connector from "../../../../common/persistence/mysql.persistence";
import { Subscription } from "../../domain/subscription";
import { SubcriptionRepository } from "../../subscription.repository";

export class SubscriptionMySqlRepository implements SubcriptionRepository {
    public async all(): Promise<Subscription[]> {
        const [rows] = await connector.execute(
            'SELECT * FROM wallet_subscription ORDER BY id DESC'
        );
        return rows as Subscription[];
    }
    public async findById(id: number): Promise<Subscription | null> {
        const [rows]: any[] = await connector.execute(
            'SELECT * FROM wallet_subscription WHERE id = ?',
            [id]
        );

        return rows.length ? rows[0] as Subscription : null;
    }
    public async store(entry: Subscription): Promise<void> {
        const dateNow = Date();
        await connector.execute(
            'INSERT INTO wallet_subscription(user_id, code, amount, cron, created_at) VALUES(?,?,?,?,?)',
            [entry.user_id, entry.code, entry.amount, entry.code, dateNow]
        );
    }
    public async update(entry: Subscription): Promise<void> {
        const dateNow = Date();
        await connector.execute(
            'UPDATE wallet_subscription SET user_id = ?, code = ?, amount = ?, cron = ?, updated_at = ? WHERE id = ?',
            [entry.user_id, entry.code, entry.amount, entry.code, dateNow, entry.id]
        );
    }
    public async remove(id: Number): Promise<void> {
        const dateNow = Date();
        await connector.execute(
            'DELETE wallet_subscription WHERE id = ?',
            [id]
        );
    }
}